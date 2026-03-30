import { client, v2 } from ".";

async function main() {
  const pat =
    "ddpat_REPLACE_WITH_YOUR_PAT";

  // Use the EXISTING AuthZ (OAuth2 bearer) mechanism — this was already
  // in the client before any PAT-specific changes.  AuthZ sets the
  // "Authorization: Bearer <token>" header, which is exactly what PAT needs.
  const configuration = client.createConfiguration({
    baseServer: new client.BaseServerConfiguration(
      "https://dd.datad0g.com",
      {}
    ),
    authMethods: {
      AuthZ: { accessToken: pat },
    },
    debug: true,
  });

  const api = new v2.UsersApi(configuration);

  try {
    const resp = await api.listUsers({ pageSize: 2 });
    console.log(
      "Response from UsersApi.listUsers:",
      JSON.stringify(resp, null, 2)
    );
  } catch (err: any) {
    console.error("Error when calling UsersApi.listUsers:", err.message || err);
    if (err.code) {
      console.error("Status code:", err.code);
    }
    if (err.body) {
      console.error("Response body:", JSON.stringify(err.body, null, 2));
    }
    process.exit(1);
  }
}

main();
