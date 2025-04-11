import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PowerpackData } from "./PowerpackData";
import { User } from "./User";

/**
 * Response object which includes a single powerpack configuration.
 */
export class PowerpackResponse {
  /**
   * Powerpack data object.
   */
  "data"?: PowerpackData;
  /**
   * Array of objects related to the users.
   */
  "included"?: Array<User>;
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
      type: "PowerpackData",
    },
    included: {
      baseName: "included",
      type: "Array<User>",
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
    return PowerpackResponse.attributeTypeMap;
  }

  public constructor() {}
}
