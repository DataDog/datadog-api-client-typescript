import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Search filter settings.
 */
export class FlakyTestsSearchFilter {
  /**
   * Search query following log syntax used to filter flaky tests, same as on Flaky Tests Management UI. The supported search keys are:
   * - `flaky_test_state`
   * - `flaky_test_category`
   * - `@test.name`
   * - `@test.suite`
   * - `@test.module`
   * - `@test.service`
   * - `@git.repository.id_v2`
   * - `@git.branch`
   * - `@test.codeowners`
   * - `env`
   */
  "query"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    query: {
      baseName: "query",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FlakyTestsSearchFilter.attributeTypeMap;
  }

  public constructor() {}
}
