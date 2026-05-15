import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppSelfServiceType } from "./AppSelfServiceType";
import { UpdateAppSelfServiceRequestDataAttributes } from "./UpdateAppSelfServiceRequestDataAttributes";

/**
 * Data for updating an app's self-service status.
 */
export class UpdateAppSelfServiceRequestData {
  /**
   * Attributes for updating an app's self-service status.
   */
  "attributes"?: UpdateAppSelfServiceRequestDataAttributes;
  /**
   * The self-service resource type.
   */
  "type"?: AppSelfServiceType;
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
      type: "UpdateAppSelfServiceRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "AppSelfServiceType",
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
    return UpdateAppSelfServiceRequestData.attributeTypeMap;
  }

  public constructor() {}
}
