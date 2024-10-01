/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of Entity V3 System Spec object.
 */
export class EntityV3SystemSpec {
  /**
   * A list of components belongs to the system.
   */
  "components"?: Array<string>;
  /**
   * The lifecycle state of the component.
   */
  "lifecycle"?: string;
  /**
   * An entity reference to the owner of the component.
   */
  "tier"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    components: {
      baseName: "components",
      type: "Array<string>",
    },
    lifecycle: {
      baseName: "lifecycle",
      type: "string",
    },
    tier: {
      baseName: "tier",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3SystemSpec.attributeTypeMap;
  }

  public constructor() {}
}
