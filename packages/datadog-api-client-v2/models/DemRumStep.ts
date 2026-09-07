/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemRumNode } from "./DemRumNode";
import { DemRumStepType } from "./DemRumStepType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single step in a RUM journey definition.
 */
export class DemRumStep {
  /**
   * List of RUM nodes within a journey step.
   */
  "nodes": Array<DemRumNode>;
  /**
   * The type of a RUM journey step.
   */
  "type": DemRumStepType;

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
    nodes: {
      baseName: "nodes",
      type: "Array<DemRumNode>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemRumStepType",
      required: true,
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
    return DemRumStep.attributeTypeMap;
  }

  public constructor() {}
}
