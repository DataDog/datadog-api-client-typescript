/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateStatusPageRequestDataAttributesType } from "./CreateStatusPageRequestDataAttributesType";
import { CreateStatusPageRequestDataAttributesVisualizationType } from "./CreateStatusPageRequestDataAttributesVisualizationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The supported attributes for updating a status page.
 */
export class PatchStatusPageRequestDataAttributes {
  /**
   * The base64-encoded image data displayed on the status page.
   */
  "companyLogo"?: string;
  /**
   * The subdomain of the status page's url taking the form `https://{domain_prefix}.statuspage.datadoghq.com`. Globally unique across Datadog Status Pages.
   */
  "domainPrefix"?: string;
  /**
   * The base64-encoded image data displayed in email notifications sent to status page subscribers.
   */
  "emailHeaderImage"?: string;
  /**
   * Whether the status page is enabled.
   */
  "enabled"?: boolean;
  /**
   * The base64-encoded image data displayed in the browser tab.
   */
  "favicon"?: string;
  /**
   * The name of the status page.
   */
  "name"?: string;
  /**
   * Whether users can subscribe to the status page.
   */
  "subscriptionsEnabled"?: boolean;
  /**
   * The type of the status page controlling how the status page is accessed.
   */
  "type"?: CreateStatusPageRequestDataAttributesType;
  /**
   * The visualization type of the status page.
   */
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
