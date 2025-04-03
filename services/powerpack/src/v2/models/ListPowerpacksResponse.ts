import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PowerpackData } from "./PowerpackData";
import { PowerpackResponseLinks } from "./PowerpackResponseLinks";
import { PowerpacksResponseMeta } from "./PowerpacksResponseMeta";
import { User } from "./User";

/**
 * Response object which includes all powerpack configurations.
 */
export class ListPowerpacksResponse {
  /**
   * List of powerpack definitions.
   */
  "data"?: Array<PowerpackData>;
  /**
   * Array of objects related to the users.
   */
  "included"?: Array<User>;
  /**
   * Links attributes.
   */
  "links"?: PowerpackResponseLinks;
  /**
   * Powerpack response metadata.
   */
  "meta"?: PowerpacksResponseMeta;
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
      type: "Array<PowerpackData>",
    },
    included: {
      baseName: "included",
      type: "Array<User>",
    },
    links: {
      baseName: "links",
      type: "PowerpackResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "PowerpacksResponseMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListPowerpacksResponse.attributeTypeMap;
  }

  public constructor() {}
}
