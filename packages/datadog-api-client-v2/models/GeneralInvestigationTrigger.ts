/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeneralInvestigationAttributes } from "./GeneralInvestigationAttributes";
import { GeneralInvestigationTriggerType } from "./GeneralInvestigationTriggerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A trigger created from a general investigation request.
 */
export class GeneralInvestigationTrigger {
  /**
   * Attributes for a general investigation, not tied to a specific monitor alert.
   */
  "generalInvestigation": GeneralInvestigationAttributes;
  /**
   * The type of general investigation trigger.
   */
  "type": GeneralInvestigationTriggerType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    generalInvestigation: {
      baseName: "general_investigation",
      type: "GeneralInvestigationAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GeneralInvestigationTriggerType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeneralInvestigationTrigger.attributeTypeMap;
  }

  public constructor() {}
}
