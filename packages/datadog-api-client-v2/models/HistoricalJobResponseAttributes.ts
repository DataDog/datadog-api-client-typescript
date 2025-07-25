/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JobDefinition } from "./JobDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Historical job attributes.
 */
export class HistoricalJobResponseAttributes {
  /**
   * Time when the job was created.
   */
  "createdAt"?: string;
  /**
   * The handle of the user who created the job.
   */
  "createdByHandle"?: string;
  /**
   * The name of the user who created the job.
   */
  "createdByName"?: string;
  /**
   * ID of the rule used to create the job (if it is created from a rule).
   */
  "createdFromRuleId"?: string;
  /**
   * Definition of a historical job.
   */
  "jobDefinition"?: JobDefinition;
  /**
   * Job name.
   */
  "jobName"?: string;
  /**
   * Job status.
   */
  "jobStatus"?: string;
  /**
   * Last modification time of the job.
   */
  "modifiedAt"?: string;

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
    createdAt: {
      baseName: "createdAt",
      type: "string",
    },
    createdByHandle: {
      baseName: "createdByHandle",
      type: "string",
    },
    createdByName: {
      baseName: "createdByName",
      type: "string",
    },
    createdFromRuleId: {
      baseName: "createdFromRuleId",
      type: "string",
    },
    jobDefinition: {
      baseName: "jobDefinition",
      type: "JobDefinition",
    },
    jobName: {
      baseName: "jobName",
      type: "string",
    },
    jobStatus: {
      baseName: "jobStatus",
      type: "string",
    },
    modifiedAt: {
      baseName: "modifiedAt",
      type: "string",
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
    return HistoricalJobResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
