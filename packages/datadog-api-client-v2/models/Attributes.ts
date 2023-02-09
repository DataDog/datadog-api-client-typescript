/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Binding } from "./Binding";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Restriction policy attributes.
 */
export class Attributes {
  /**
   * An array of bindings.
   */
  "bindings": Array<Binding>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bindings: {
      baseName: "bindings",
      type: "Array<Binding>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Attributes.attributeTypeMap;
  }

  public constructor() {}
}
