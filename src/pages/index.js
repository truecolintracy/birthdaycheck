import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Button } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  buttons: {
    transition: "all 0.1s ease-in-out",
    margin: 15,
  },
  bigButton: {
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundColor: "pink",
    zIndex: 5,
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "purple",
    },
  },
  bigButtonText: {
    fontSize: 40,
  },
})

const IndexPage = () => {
  const classes = useStyles()
  const [style, setStyle] = React.useState({})
  const [hoverCount, setHoverCount] = React.useState(0)
  const [banner, setBanner] = React.useState(false)
  const [bigButton, setBigButton] = React.useState(false)
  const [isBirthday, setIsBirthday] = React.useState(true)

  const toggleHover = () => {
    const position = "absolute"
    let top = Math.floor(Math.random() * window.innerHeight - 50) + "px"
    let left = Math.floor(Math.random() * window.innerWidth - 50) + "px"

    setHoverCount(prevHoverCount => prevHoverCount + 1)

    setStyle({
      top: top,
      left: left,
      position: position,
    })
  }

  React.useEffect(() => {
    if (hoverCount > 5) {
      setBanner(true)
    }

    if (hoverCount > 15) {
      setStyle({
        display: "none",
      })
      setBigButton(true)
    }

    return
  }, [hoverCount])

  return (
    <Layout>
      <SEO title="Home" />
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        textAlign="center"
      >
        <Box width="100%">
          <Typography component="h1" style={{ fontSize: "50px" }}>
            🤪 {"\u2728"} Is it Jordan's birthday? {"\u2728"} 🤪
          </Typography>
          {banner && (
            <Typography
              component="h2"
              style={{ fontSize: "44px", color: "purple" }}
            >
              COME ON! GET THE BUTTON!
            </Typography>
          )}
        </Box>
        <Box width="100%">
          {isBirthday && (
            <Box>
              <Button
                variant="contained"
                color="primary"
                style={style}
                className={classes.buttons}
                onMouseEnter={toggleHover}
              >
                Yes
              </Button>
              {bigButton && (
                <Link
                  variant="contained"
                  color="primary"
                  className={classes.bigButton}
                  to="/page-2/"
                >
                  <Typography className={classes.bigButtonText}>
                    Yes It is!!!
                  </Typography>
                </Link>
              )}
            </Box>
          )}

          <Button
            variant="contained"
            color="secondary"
            className={classes.buttons}
          >
            Maybe?
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
