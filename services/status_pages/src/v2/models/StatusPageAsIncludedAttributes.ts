import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageRequestDataAttributesType } from "./CreateStatusPageRequestDataAttributesType";
import { CreateStatusPageRequestDataAttributesVisualizationType } from "./CreateStatusPageRequestDataAttributesVisualizationType";
import { StatusPageAsIncludedAttributesComponentsItems } from "./StatusPageAsIncludedAttributesComponentsItems";

export class StatusPageAsIncludedAttributes {
  "companyLogo"?: string;
  "components"?: Array<StatusPageAsIncludedAttributesComponentsItems>;
  "createdAt"?: Date;
  "customDomain"?: string;
  "customDomainEnabled"?: boolean;
  "domainPrefix"?: string;
  "emailHeaderImage"?: string;
  "enabled"?: boolean;
  "favicon"?: string;
  "modifiedAt"?: Date;
  "name"?: string;
  "pageUrl"?: string;
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
    components: {
      baseName: "components",
      type: "Array<StatusPageAsIncludedAttributesComponentsItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    customDomain: {
      baseName: "custom_domain",
      type: "string",
    },
    customDomainEnabled: {
      baseName: "custom_domain_enabled",
      type: "boolean",
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
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pageUrl: {
      baseName: "page_url",
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
    return StatusPageAsIncludedAttributes.attributeTypeMap;
  }

  public constructor() {}
}
