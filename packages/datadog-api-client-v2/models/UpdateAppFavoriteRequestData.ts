/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppFavoriteType } from "./AppFavoriteType";
import { UpdateAppFavoriteRequestDataAttributes } from "./UpdateAppFavoriteRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating an app's favorite status.
 */
export class UpdateAppFavoriteRequestData {
  /**
   * Attributes for updating an app's favorite status.
   */
  "attributes"?: UpdateAppFavoriteRequestDataAttributes;
  /**
   * The favorite resource type.
   */
  "type"?: AppFavoriteType;

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
      type: "UpdateAppFavoriteRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "AppFavoriteType",
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
    return UpdateAppFavoriteRequestData.attributeTypeMap;
  }

  public constructor() {}
}
