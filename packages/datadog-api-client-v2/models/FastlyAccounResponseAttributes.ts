/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyService } from "./FastlyService";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes object of a Fastly account.
 */
export class FastlyAccounResponseAttributes {
  /**
   * The name of the Fastly account.
   */
  "name": string;
  /**
   * A list of services belonging to the parent account.
   */
  "services"?: Array<FastlyService>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    services: {
      baseName: "services",
      type: "Array<FastlyService>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FastlyAccounResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
