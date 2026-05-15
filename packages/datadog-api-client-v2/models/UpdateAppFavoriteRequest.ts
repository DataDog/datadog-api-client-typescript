/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateAppFavoriteRequestData } from "./UpdateAppFavoriteRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A request to add or remove an app from the current user's favorites.
 */
export class UpdateAppFavoriteRequest {
  /**
   * Data for updating an app's favorite status.
   */
  "data"?: UpdateAppFavoriteRequestData;

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
      type: "UpdateAppFavoriteRequestData",
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
    return UpdateAppFavoriteRequest.attributeTypeMap;
  }

  public constructor() {}
}
