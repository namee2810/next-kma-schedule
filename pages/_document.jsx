import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta httpEquiv="Cotent-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="Thời khóa biểu trực tuyến dành cho sinh viên Học viện Kỹ thuật Mật mã (KMA)" />

          <meta property="og:url" content="https://kma.namee.site" key="ogurl" />
          <meta property="og:image" content="https://kma.namee.site/images/vercel.png" key="ogimage" />
          <meta property="og:title" content="Thời khóa biểu KMA" key="ogtitle" />
          <meta property="og:description" content="Thời khóa biểu trực tuyến dành cho sinh viên Học viện Kỹ thuật Mật mã (KMA)" key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument