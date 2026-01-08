import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageRequestDataAttributesComponentsItems } from "./CreateStatusPageRequestDataAttributesComponentsItems";

export class CreateStatusPageRequestDataAttributes {
  "companyLogo"?: string;
  "components"?: Array<CreateStatusPageRequestDataAttributesComponentsItems>;
  "domainPrefix": string;
  "emailHeaderImage"?: string;
  "enabled": boolean;
  "favicon"?: string;
  "name": string;
  "subscriptionsEnabled"?: boolean;
  "type": string;
  "visualizationType": string;
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
    components: {
      baseName: "components",
      type: "Array<CreateStatusPageRequestDataAttributesComponentsItems>",
    },
    domainPrefix: {
      baseName: "domain_prefix",
      type: "string",
      required: true,
    },
    emailHeaderImage: {
      baseName: "email_header_image",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    favicon: {
      baseName: "favicon",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    subscriptionsEnabled: {
      baseName: "subscriptions_enabled",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    visualizationType: {
      baseName: "visualization_type",
      type: "string",
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
    return CreateStatusPageRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
