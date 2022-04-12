import Link from 'next/link'

export const Card = ({
  authorName,
  authorEmail,
  external = false,
  file = '',
  href = '',
  imageTitle,
  imageUrl,
  subtitle,
  tag,
  title
}) => {
  const imageMarkup = imageTitle && imageUrl
    ? (
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover"
               src={imageUrl}
               alt={imageTitle} />
        </div>
      )
    : null

  const tagMarkup = tag
    ? (
        <p className="text-sm font-medium text-green-700">
          {tag}
        </p>
      )
    : null

  const titleContent = href ? (
    <Link href={href}>
      <a className="group hover:underline" target={external ? "_blank" : ""}>
        <div className="flex">
          {href && (
            <div className="min-w-12 mr-2">
              <div className="transition duration-500 ease-in-out rounded-lg inline-flex p-3 bg-green-50 group-hover:bg-green-100 text-green-600 group-hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Watch:" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            )}
            <h4 className="flex text-md font-semibold text-gray-900">
              {title}
            </h4>
        </div>
      </a>
    </Link>
  ) : (
    <h4 className="text-md font-semibold text-gray-900">
      {title}
    </h4>
  )

  const titleMarkup = title
    ? titleContent
    : null

  const subtitleMarkup = subtitle
    ? (
        <h5 className="mt-3 text-base text-gray-500">
          {subtitle}
        </h5>
      )
    : null

  const contentMarkup = subtitle || title
    ? (
        <div className="block mt-2">
          {titleMarkup}
          {subtitleMarkup}
        </div>
      )
    : null

  const authorNameMarkup = authorName
    ? (
        <p className="text-sm font-medium text-gray-900">
          {authorName}
        </p>
      )
    : null

  const authorEmailMarkup = authorEmail
    ? (
        <div className="flex space-x-1 text-sm text-gray-500">
          {authorEmail.replace()}
        </div>
      )
    : null

  const fileMarkup = file
    ? (
        <div className="flex-shrink-0 ml-3">
          <a href={file} download tabIndex="-1" title={`Download: ${title}`}>
            <span className="transition duration-500 ease-in-out rounded-lg inline-flex p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-600 ring-4 ring-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </a>
        </div>
      )
    : null

  const authorMarkup = authorName || authorEmail
    ? (
        <div className="mt-6 flex items-center">
          <div className="flex-grow">
            {authorNameMarkup}
            {authorEmailMarkup}
          </div>
          {fileMarkup}
        </div>
      )
    : null

  return (
    <article className="border-t-8 border-green-700 flex flex-col rounded-lg shadow-lg overflow-hidden mb-5">
      {imageMarkup}
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          {tagMarkup}
          {contentMarkup}
        </div>
        {authorMarkup}
      </div>
    </article>
  )
}
