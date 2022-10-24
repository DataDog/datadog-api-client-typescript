/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMApplicationCreateAttributes } from "./RUMApplicationCreateAttributes";
import { RUMApplicationCreateType } from "./RUMApplicationCreateType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * RUM application creation.
 */
export class RUMApplicationCreate {
  /**
   * RUM application creation attributes.
   */
  "attributes": RUMApplicationCreateAttributes;
  /**
   * RUM application creation type.
   */
  "type": RUMApplicationCreateType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "RUMApplicationCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationCreateType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMApplicationCreate.attributeTypeMap;
  }

  public constructor() {}
}
