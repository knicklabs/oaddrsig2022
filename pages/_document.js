import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-50 border-t-4 border-green-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
