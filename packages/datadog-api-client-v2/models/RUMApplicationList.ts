/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMApplicationListAttributes } from "./RUMApplicationListAttributes";
import { RUMApplicationListType } from "./RUMApplicationListType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM application list.
 */
export class RUMApplicationList {
  /**
   * RUM application list attributes.
   */
  "attributes": RUMApplicationListAttributes;
  /**
   * RUM application list type.
   */
  "type": RUMApplicationListType;

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
      type: "RUMApplicationListAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationListType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMApplicationList.attributeTypeMap;
  }

  public constructor() {}
}
