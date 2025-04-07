import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The list of current AWS services for which Datadog offers automatic log collection.
 */
export class AWSLogsListServicesResponse {
  /**
   * Key value in returned object.
   */
  "id"?: string;
  /**
   * Name of service available for configuration with Datadog logs.
   */
  "label"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSLogsListServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
