import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppMeta } from "./AppMeta";
import { AppRelationship } from "./AppRelationship";
import { Deployment } from "./Deployment";
import { GetAppResponseData } from "./GetAppResponseData";

/**
 * The full app definition response object.
 */
export class GetAppResponse {
  /**
   * The data object containing the app definition.
   */
  "data"?: GetAppResponseData;
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
      type: "GetAppResponseData",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GetAppResponse.attributeTypeMap;
  }

  public constructor() {}
}
