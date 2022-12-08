/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMApplicationAttributes } from "./RUMApplicationAttributes";
import { RUMApplicationType } from "./RUMApplicationType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * RUM application.
 */
export class RUMApplication {
  /**
   * RUM application attributes.
   */
  "attributes": RUMApplicationAttributes;
  /**
   * RUM application ID.
   */
  "id": string;
  /**
   * RUM application response type.
   */
  "type": RUMApplicationType | UnparsedObject;

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
      type: "RUMApplicationAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMApplication.attributeTypeMap;
  }

  public constructor() {}
}
