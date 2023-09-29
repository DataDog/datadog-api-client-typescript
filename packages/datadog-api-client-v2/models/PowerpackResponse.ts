/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackData } from "./PowerpackData";
import { User } from "./User";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackResponse.attributeTypeMap;
  }

  public constructor() {}
}
