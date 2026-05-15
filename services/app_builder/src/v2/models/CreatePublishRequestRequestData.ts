import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatePublishRequestRequestDataAttributes } from "./CreatePublishRequestRequestDataAttributes";
import { PublishRequestType } from "./PublishRequestType";

/**
 * Data for creating a publish request.
 */
export class CreatePublishRequestRequestData {
  /**
   * Attributes for creating a publish request.
   */
  "attributes"?: CreatePublishRequestRequestDataAttributes;
  /**
   * The publish-request resource type.
   */
  "type"?: PublishRequestType;
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
      type: "CreatePublishRequestRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "PublishRequestType",
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
    return CreatePublishRequestRequestData.attributeTypeMap;
  }

  public constructor() {}
}
