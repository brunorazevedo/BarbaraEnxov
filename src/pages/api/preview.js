import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "@prismicio/client";

export default async function handler(req, res) {
  const client = createClient({ req });

  await setPreviewData({ req, res });

  return await redirectToPreviewURL({ req, res, client });
}
