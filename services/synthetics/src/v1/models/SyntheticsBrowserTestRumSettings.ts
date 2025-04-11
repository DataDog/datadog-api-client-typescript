import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The RUM data collection settings for the Synthetic browser test.
 * **Note:** There are 3 ways to format RUM settings:
 *
 * `{ isEnabled: false }`
 * RUM data is not collected.
 *
 * `{ isEnabled: true }`
 * RUM data is collected from the Synthetic test's default application.
 *
 * `{ isEnabled: true, applicationId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", clientTokenId: 12345 }`
 * RUM data is collected using the specified application.
 */
export class SyntheticsBrowserTestRumSettings {
  /**
   * RUM application ID used to collect RUM data for the browser test.
   */
  "applicationId"?: string;
  /**
   * RUM application API key ID used to collect RUM data for the browser test.
   */
  "clientTokenId"?: number;
  /**
   * Determines whether RUM data is collected during test runs.
   */
  "isEnabled": boolean;
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
    applicationId: {
      baseName: "applicationId",
      type: "string",
    },
    clientTokenId: {
      baseName: "clientTokenId",
      type: "number",
      format: "int64",
    },
    isEnabled: {
      baseName: "isEnabled",
      type: "boolean",
      required: true,
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
    return SyntheticsBrowserTestRumSettings.attributeTypeMap;
  }

  public constructor() {}
}
