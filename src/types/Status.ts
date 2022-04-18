/**
 * Response of Status operation.
 * @export
 * @interface StatusRS
 */
export interface StatusRS {
  auditData: {
    timestamp: string
  },
  status: string
}
