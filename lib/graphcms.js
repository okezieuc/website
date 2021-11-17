async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllCourses() {
  const data = await fetchAPI(`
    query {
      courses {
        id
        title
        description
        slug
      }
    }
  `);
  return data.courses;
}

export async function getAllCourseSlugs() {
  const data = await fetchAPI(`
    query AllCourseSlugs {
      courses {
        slug
      }
    }
  `);
  return data.courses;
}

export async function getCourseBySlug(slug) {
  const data = await fetchAPI(
    `
    query CourseBySlug($slug: String!){
      course(where: {slug: $slug}) {
        id,
        title,
        description,
        slug,
        lessons {
          title,
          description,
          slug
        }
      
      }
    }
  `,
    {
      variables: {
        slug,
      },
    }
  );
  return data.course;
}

export async function getLessonData(slug, courseid) {
  const data = await fetchAPI(
    `
    query LessonData($slug: String!, $courseid: ID!) {
      lesson(where: {slug: $slug}) {
        title
        description
        slug
        content {
          markdown
        }
        course(where: {id: $courseid}) {
          id
        }
      }
    }
  `,
    {
      variables: {
        slug,
        courseid,
      },
    }
  );
  return data.lesson;
}
