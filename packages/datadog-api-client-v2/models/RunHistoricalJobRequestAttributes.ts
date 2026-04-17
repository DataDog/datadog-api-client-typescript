/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JobDefinition } from "./JobDefinition";
import { JobDefinitionFromRule } from "./JobDefinitionFromRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Run a historical job request.
 */
export class RunHistoricalJobRequestAttributes {
  /**
   * Definition of a historical job based on a security monitoring rule.
   */
  "fromRule"?: JobDefinitionFromRule;
  /**
   * Request ID.
   */
  "id"?: string;
  /**
   * Definition of a historical job.
   */
  "jobDefinition"?: JobDefinition;

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
    fromRule: {
      baseName: "fromRule",
      type: "JobDefinitionFromRule",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    jobDefinition: {
      baseName: "jobDefinition",
      type: "JobDefinition",
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
    return RunHistoricalJobRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
