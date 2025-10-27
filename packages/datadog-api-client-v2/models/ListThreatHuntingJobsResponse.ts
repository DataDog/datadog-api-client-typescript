/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ThreatHuntingJobListMeta } from "./ThreatHuntingJobListMeta";
import { ThreatHuntingJobResponseData } from "./ThreatHuntingJobResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of threat hunting jobs.
 */
export class ListThreatHuntingJobsResponse {
  /**
   * Array containing the list of threat hunting jobs.
   */
  "data"?: Array<ThreatHuntingJobResponseData>;
  /**
   * Metadata about the list of jobs.
   */
  "meta"?: ThreatHuntingJobListMeta;

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
      type: "Array<ThreatHuntingJobResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "ThreatHuntingJobListMeta",
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
    return ListThreatHuntingJobsResponse.attributeTypeMap;
  }

  public constructor() {}
}
