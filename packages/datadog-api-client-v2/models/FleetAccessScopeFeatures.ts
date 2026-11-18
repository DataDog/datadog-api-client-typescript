/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fleet actions authorized on agents matching the access scope query.
 */
export class FleetAccessScopeFeatures {
  /**
   * Whether the scope permits configuration changes.
   */
  "configure"?: boolean;
  /**
   * Whether the scope permits Agent installation.
   */
  "install"?: boolean;
  /**
   * Whether the scope permits package upgrades.
   */
  "upgrade"?: boolean;

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
    configure: {
      baseName: "configure",
      type: "boolean",
    },
    install: {
      baseName: "install",
      type: "boolean",
    },
    upgrade: {
      baseName: "upgrade",
      type: "boolean",
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
    return FleetAccessScopeFeatures.attributeTypeMap;
  }

  public constructor() {}
}
