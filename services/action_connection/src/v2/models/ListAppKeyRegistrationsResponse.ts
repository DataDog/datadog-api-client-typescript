import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppKeyRegistrationData } from "./AppKeyRegistrationData";
import { ListAppKeyRegistrationsResponseMeta } from "./ListAppKeyRegistrationsResponseMeta";

/**
 * A paginated list of app key registrations.
 */
export class ListAppKeyRegistrationsResponse {
  /**
   * An array of app key registrations.
   */
  "data"?: Array<AppKeyRegistrationData>;
  /**
   * The definition of `ListAppKeyRegistrationsResponseMeta` object.
   */
  "meta"?: ListAppKeyRegistrationsResponseMeta;
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
      type: "Array<AppKeyRegistrationData>",
    },
    meta: {
      baseName: "meta",
      type: "ListAppKeyRegistrationsResponseMeta",
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
    return ListAppKeyRegistrationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
