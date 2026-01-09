import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageRequestDataAttributesType } from "./CreateStatusPageRequestDataAttributesType";
import { CreateStatusPageRequestDataAttributesVisualizationType } from "./CreateStatusPageRequestDataAttributesVisualizationType";

export class PatchStatusPageRequestDataAttributes {
  "companyLogo"?: string;
  "domainPrefix"?: string;
  "emailHeaderImage"?: string;
  "enabled"?: boolean;
  "favicon"?: string;
  "name"?: string;
  "subscriptionsEnabled"?: boolean;
  "type"?: CreateStatusPageRequestDataAttributesType;
  "visualizationType"?: CreateStatusPageRequestDataAttributesVisualizationType;
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
    companyLogo: {
      baseName: "company_logo",
      type: "string",
    },
    domainPrefix: {
      baseName: "domain_prefix",
      type: "string",
    },
    emailHeaderImage: {
      baseName: "email_header_image",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    favicon: {
      baseName: "favicon",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    subscriptionsEnabled: {
      baseName: "subscriptions_enabled",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "CreateStatusPageRequestDataAttributesType",
    },
    visualizationType: {
      baseName: "visualization_type",
      type: "CreateStatusPageRequestDataAttributesVisualizationType",
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
    return PatchStatusPageRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
