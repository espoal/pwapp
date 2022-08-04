const baseConfig = {
  "emulators": {
    "hosting": {
      "host": "0.0.0.0",
      "port": 5000
    }
  },
  "hosting": {
    "public": "dist/public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
    ]
  }
}

export const fireBaseFactory = ({ pages }) => {

  const rewrites = pages.map(({ location, source = location}) => {


    return {
      source,
      destination: `/ssr${location}/index.html`
    }
  })

  rewrites.push({
    "source": "**",
    "destination": "/index.html"
  })

  baseConfig.hosting.rewrites = rewrites

  return baseConfig
}

