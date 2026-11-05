import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageEmailAccessPolicyRequestDataAttributes } from "./CreateStatusPageEmailAccessPolicyRequestDataAttributes";
import { StatusPageEmailAccessPolicyType } from "./StatusPageEmailAccessPolicyType";

/**
 * The data object for creating a status page email access policy.
 */
export class CreateStatusPageEmailAccessPolicyRequestData {
  /**
   * Attributes for creating a status page email access policy.
   */
  "attributes": CreateStatusPageEmailAccessPolicyRequestDataAttributes;
  /**
   * Status page email access policy resource type.
   */
  "type": StatusPageEmailAccessPolicyType;
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
      type: "CreateStatusPageEmailAccessPolicyRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatusPageEmailAccessPolicyType",
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
    return CreateStatusPageEmailAccessPolicyRequestData.attributeTypeMap;
  }

  public constructor() {}
}
