/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackData } from "./PowerpackData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpacks are templated groups of dashboard widgets you can save from an existing dashboard and turn into reusable packs in the widget tray.
 */
export class Powerpack {
  /**
   * Powerpack data object.
   */
  "data"?: PowerpackData;

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
      type: "PowerpackData",
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
    return Powerpack.attributeTypeMap;
  }

  public constructor() {}
}
