import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueDefinitionDataAttributes } from "./IssueDefinitionDataAttributes";
import { IssueDefinitionDataType } from "./IssueDefinitionDataType";

/**
 * A single issue definition entry returned by the issues endpoint.
 */
export class IssueDefinitionData {
  /**
   * Attributes of a single End User Device Monitoring issue definition.
   */
  "attributes"?: IssueDefinitionDataAttributes;
  /**
   * Stable identifier of the issue definition, used in the `issues` field of a device record.
   */
  "id": string;
  /**
   * Issue definitions resource type.
   */
  "type": IssueDefinitionDataType;
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
    attributes: {
      baseName: "attributes",
      type: "IssueDefinitionDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueDefinitionDataType",
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
    return IssueDefinitionData.attributeTypeMap;
  }

  public constructor() {}
}
