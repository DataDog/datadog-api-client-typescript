/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMApplicationUpdateAttributes } from "./RUMApplicationUpdateAttributes";
import { RUMApplicationUpdateType } from "./RUMApplicationUpdateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM application update.
 */
export class RUMApplicationUpdate {
  /**
   * RUM application update attributes.
   */
  "attributes"?: RUMApplicationUpdateAttributes;
  /**
   * RUM application ID.
   */
  "id": string;
  /**
   * RUM application update type.
   */
  "type": RUMApplicationUpdateType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "RUMApplicationUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationUpdateType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMApplicationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
