import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditRefreshStatus } from "./ExperimentsBanditRefreshStatus";

/**
 * The most recently started refresh. Null until one starts.
 */
export class ExperimentsBanditRefreshV2 {
  /**
   * When the refresh was requested.
   */
  "createdAt": Date;
  /**
   * When the refresh finished. Null while it runs.
   */
  "endedAt": Date | null;
  /**
   * The refresh ID.
   */
  "id": string;
  /**
   * When the refresh started running. Null while it is pending.
   */
  "startedAt": Date | null;
  /**
   * The status of the refresh.
   */
  "status": ExperimentsBanditRefreshStatus;
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
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    endedAt: {
      baseName: "ended_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "ExperimentsBanditRefreshStatus",
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
    return ExperimentsBanditRefreshV2.attributeTypeMap;
  }

  public constructor() {}
}
