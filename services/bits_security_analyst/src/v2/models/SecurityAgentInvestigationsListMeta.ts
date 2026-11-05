import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationNoRunReason } from "./SecurityAgentInvestigationNoRunReason";

/**
 * Metadata of a page of investigations.
 */
export class SecurityAgentInvestigationsListMeta {
  /**
   * Why `filter[signal_id]` returned no investigation. Set only on the first page of an empty result. The reason is
   * based on the organization's current settings. Poll again only on `investigation_not_started`, after the number
   * of seconds in the `Retry-After` header; treat the others as final for this signal.
   * - `investigation_not_started`: no investigation has started yet, but one may still start.
   * - `not_investigated`: no investigation started within an hour of the signal, so none is expected. The signal
   *   was skipped for a reason this API doesn't report, such as its severity or a rate limit.
   * - `rule_not_enabled`: the signal's detection rule doesn't have Bits Security Analyst enabled, so no
   *   investigation starts automatically.
   * - `signal_not_found`: the ID isn't a signal ID, or no signal with this ID exists in the organization.
   * - `org_not_activated`: the organization hasn't activated Bits Security Analyst.
   */
  "reason"?: SecurityAgentInvestigationNoRunReason;
  /**
   * Without `filter[signal_id]`, the number of signals that match the filters. With `filter[signal_id]`, the
   * number of investigations of that signal. Pages past the last page return 0.
   */
  "totalCount": number;
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
    reason: {
      baseName: "reason",
      type: "SecurityAgentInvestigationNoRunReason",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int64",
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
    return SecurityAgentInvestigationsListMeta.attributeTypeMap;
  }

  public constructor() {}
}
