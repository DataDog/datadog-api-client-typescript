import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ThreatHuntingJobListMeta } from "./ThreatHuntingJobListMeta";
import { ThreatHuntingJobResponseData } from "./ThreatHuntingJobResponseData";

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
