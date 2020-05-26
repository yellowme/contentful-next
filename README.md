# contentful-next
A simple Next.js site powered by Contentful and ready for deployment on Vercel

## Contentful configuration

1. Get a free account on Contentful.
2. Go to *Content Model* and add a *Content Type* called *Post*.
3. On your Post, define the attributes. Define all as *Short Text* and name then as follows:
  * Title
  * Date
  * Img
  * Alt
  * URL
4. Go to *Content* and Add Post
5. Add a post with whatever info you want Img must be the URL of an image, and URL is a link to an external page. Example:
  * Title: My Beautiful Cat
  * Date: June 11, 2054
  * Img: http://theurltotheactualimageofmycat.com/image.png
  * Alt: This is beautiful a cat
  * URL: http://beautifulcatsociety.org
6. Hit *Publish*.
7. Go to *Settings* > *API Keys* and *Create API keys.
8. Name your keys however you want and copy both the *Space ID* and the *Content Delivery API - access token*

## To deploy locally

1. Install dependencies via `npm`

```console
$ npm init -y
$ npm i contentful next react react-dom vercel
```

2. Create a file names `.env.build` with the following content in the root folder of the project.

```
SPACE_ID=your_contentful_space_id
TOKEN=your_contentful_api_access_token
```

3. Run on `localhost`

```console
$ npm run build && npm run dev
```

## To deploy on Vercel

1. Upload your API keys as specified on the `vercel.json` file but without using the `@` sign to Vercel's Secrets vault.

```console
$ vercel secrets add contentful_space_id your_contentful_space_id
$ vercel secrets add contentful_access_token your_contentful_api_access_token
```

2. Deploy

* Option 1: Deploy via Github: https://vercel.com/docs/v2/git-integrations
* Option 2: Deploy with Vercel CLI: https://vercel.com/download



  
