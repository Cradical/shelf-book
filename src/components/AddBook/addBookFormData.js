export const FORM_FIELD_INPUTS = [
  {
    author: {
      label: {
        innerText: 'Author',
        htmlFor: 'author-name',
      },
      input: {
        type: 'text',
        name: 'author',
        placeholder: 'Who is the author?',
      },
    },
  },
  {
    title: {
      label: {
        innerText: 'Book Title',
        htmlFor: 'book-title',
      },
      input: {
        type: 'text',
        name: 'title',
        placeholder: 'What is the title?',
      },
    },
  },
  {
    subtitle: {
      label: {
        innerText: 'Book Subtitle',
        htmlFor: 'book-subtitle',
      },
      input: {
        type: 'text',
        name: 'subtitle',
        placeholder: 'What is the subtitle?',
      },
    },
  },
  {
    bookSummary: {
      label: {
        innerText: 'Book Summary',
        htmlFor: 'book-summary',
      },
      input: {
        type: 'text',
        name: 'bookSummary',
        placeholder: 'What is the book about?',
      },
    },
  },
  {
    year: {
      label: {
        innerText: 'Year Published',
        htmlFor: 'publish-year',
      },
      input: {
        type: 'text',
        name: 'year',
        placeholder: 'When was it published?',
      },
    },
  },
  {
    genre: {
      label: {
        innerText: 'Genre',
        htmlFor: 'book-genre',
      },
      input: {
        type: 'text',
        name: 'genre',
        placeholder: 'What is the genre?',
      },
    },
  },
  {
    imageLInk: {
      label: {
        innerText: 'Cover Image Link',
        htmlFor: 'cover-image-link',
      },
      input: {
        type: 'url',
        name: 'imageLink',
        placeholder: 'https://example.com',
      },
    },
  },
  {
    language: {
      label: {
        innerText: 'Language',
        htmlFor: 'language',
      },
      input: {
        type: 'text',
        name: 'language',
        placeholder: 'e.g. Spanish',
      },
    },
  },
]

export const FORM_FIELD_SWITHCHES = [
  {
    haveRead: {
      input: {
        id: 'haveRead-check',
        type: 'switch',
        name: 'haveRead',
        label: 'Have you read this?',
      },
    },
  },
  {
    nonFiction: {
      input: {
        id: 'nonfiction-check',
        type: 'switch',
        name: 'nonFiction',
        label: 'Is this a nonfiction book?',
      },
    },
  },
  {
    recommendable: {
      input: {
        id: 'recommendable-check',
        type: 'switch',
        name: 'recommendable',
        label: 'Recommend this book?',
      },
    },
  },
]
