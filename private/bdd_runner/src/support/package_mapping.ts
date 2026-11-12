import fs from "fs";

interface iPackageMappingRecord {
  monolith: string;
  package: string;
  namespace: string;
  class: string;
  method: string;
}

const apiClassNames: { [operation: string]: string } = {};
const content = fs
  .readFileSync(process.env.BDD_RUNNER_PACKAGE_MAPPING as string)
  .toString();
for (const record of JSON.parse(content) as iPackageMappingRecord[]) {
  apiClassNames[`${record.namespace}.${record.method}`] = record.class;
}

// Feature files name the tag's API class, which a package may replace for an operation.
function packageApiName(apiVersion: string, operationName: string): string {
  const apiClassName = apiClassNames[`${apiVersion}.${operationName}`];
  if (apiClassName === undefined) {
    throw new Error(`No package found for ${apiVersion}.${operationName}`);
  }
  return apiClassName;
}

export { packageApiName };
