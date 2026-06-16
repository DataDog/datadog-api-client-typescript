import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityServiceResource } from "./ApplicationSecurityServiceResource";
import { ApplicationSecurityServicesMetadata } from "./ApplicationSecurityServicesMetadata";

/**
 * Response object containing the list of services matching the requested name.
 */
export class ApplicationSecurityServicesResponse {
  /**
   * The list of services matching the requested name.
   */
  "data": Array<ApplicationSecurityServiceResource>;
  /**
   * Metadata returned alongside the list of services.
   */
  "meta": ApplicationSecurityServicesMetadata;
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
    data: {
      baseName: "data",
      type: "Array<ApplicationSecurityServiceResource>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ApplicationSecurityServicesMetadata",
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
    return ApplicationSecurityServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
