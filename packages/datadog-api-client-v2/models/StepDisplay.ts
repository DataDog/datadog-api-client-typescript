/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StepDisplayBounds } from "./StepDisplayBounds";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `StepDisplay` object.
 */
export class StepDisplay {
  /**
   * The definition of `StepDisplayBounds` object.
   */
  "bounds"?: StepDisplayBounds;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bounds: {
      baseName: "bounds",
      type: "StepDisplayBounds",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StepDisplay.attributeTypeMap;
  }

  public constructor() {}
}
