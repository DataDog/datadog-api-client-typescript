import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAttributes } from "./IntegrationAttributes";
import { IntegrationLinks } from "./IntegrationLinks";
import { IntegrationType } from "./IntegrationType";

/**
 * Integration resource object.
 */
export class Integration {
  /**
   * Attributes for an integration.
   */
  "attributes": IntegrationAttributes;
  /**
   * The unique identifier of the integration.
   */
  "id": string;
  /**
   * Links for the integration resource.
   */
  "links"?: IntegrationLinks;
  /**
   * Integration resource type.
   */
  "type": IntegrationType;
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
      type: "IntegrationAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    links: {
      baseName: "links",
      type: "IntegrationLinks",
    },
    type: {
      baseName: "type",
      type: "IntegrationType",
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
    return Integration.attributeTypeMap;
  }

  public constructor() {}
}
