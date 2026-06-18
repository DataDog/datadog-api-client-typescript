import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifIntakeMappingAttributes } from "./AwsWifIntakeMappingAttributes";
import { AwsWifIntakeMappingType } from "./AwsWifIntakeMappingType";

/**
 * An AWS WIF intake mapping resource.
 */
export class AwsWifIntakeMappingData {
  /**
   * Attributes of an AWS WIF intake mapping.
   */
  "attributes": AwsWifIntakeMappingAttributes;
  /**
   * The UUID of the intake mapping.
   */
  "id": string;
  /**
   * Type identifier for an AWS WIF intake mapping.
   */
  "type": AwsWifIntakeMappingType;
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
      type: "AwsWifIntakeMappingAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AwsWifIntakeMappingType",
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
    return AwsWifIntakeMappingData.attributeTypeMap;
  }

  public constructor() {}
}
