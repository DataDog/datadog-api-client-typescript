import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppMeta } from "./AppMeta";
import { AppRelationship } from "./AppRelationship";
import { Deployment } from "./Deployment";
import { UpdateAppResponseData } from "./UpdateAppResponseData";

/**
 * The response object after an app is successfully updated.
 */
export class UpdateAppResponse {
  /**
   * The data object containing the updated app definition.
   */
  "data"?: UpdateAppResponseData;
  /**
   * Data on the version of the app that was published.
   */
  "included"?: Array<Deployment>;
  /**
   * Metadata of an app.
   */
  "meta"?: AppMeta;
  /**
   * The app's publication relationship and custom connections.
   */
  "relationship"?: AppRelationship;
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
      type: "UpdateAppResponseData",
    },
    included: {
      baseName: "included",
      type: "Array<Deployment>",
    },
    meta: {
      baseName: "meta",
      type: "AppMeta",
    },
    relationship: {
      baseName: "relationship",
      type: "AppRelationship",
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
    return UpdateAppResponse.attributeTypeMap;
  }

  public constructor() {}
}
