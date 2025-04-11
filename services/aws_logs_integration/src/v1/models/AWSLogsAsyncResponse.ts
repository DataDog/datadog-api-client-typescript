import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSLogsAsyncError } from "./AWSLogsAsyncError";

/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */
export class AWSLogsAsyncResponse {
  /**
   * List of errors.
   */
  "errors"?: Array<AWSLogsAsyncError>;
  /**
   * Status of the properties.
   */
  "status"?: string;
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
    errors: {
      baseName: "errors",
      type: "Array<AWSLogsAsyncError>",
    },
    status: {
      baseName: "status",
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
    return AWSLogsAsyncResponse.attributeTypeMap;
  }

  public constructor() {}
}
